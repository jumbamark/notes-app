from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer


# getting all our notes from our database
def getNotesList(request):
    notes = Note.objects.all().order_by('-updated')
    # print(notes)
    serializer = NoteSerializer(notes, many=True)
    # print(serializer)
    return Response(serializer.data)


def getNoteDetail(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


def create_Note(request):
    serializer = NoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.erros)


def createNote(request):
    data = request.data
    note = Note.objects.create(
        body = data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


def updateNote(request, pk):
    note = Note.objects.get(id=pk)
    # note = Note.objects.get(id=kwargs['pk'])
    serializer = NoteSerializer(instance=note, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response(status=204)