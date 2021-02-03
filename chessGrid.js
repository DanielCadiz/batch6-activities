const chess_piece = document.querySelectorAll('.piece');
const boxes = document.querySelectorAll('.box');

let draggedPiece = null;

for (let i = 0; i < chess_piece.length; i++) {
    const piece = chess_piece[i];

    piece.addEventListener('dragstart', function (){
    draggedPiece = piece;
    setTimeout(function() {
        piece.style.display = 'none';
    }, 0)
});

    piece.addEventListener('dragend', function (){
    setTimeout(function() {
        draggedPiece.style.display = 'block';
        draggedPiece = null;
    }, 0);
})

    for (let j = 0; j < boxes.length; j ++) {
    const box = boxes[j];

    box.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    box.addEventListener('dragenter', function(e) {
        e.preventDefault();
    });
    box.addEventListener('drop', function(e) {
        console.log('drop');
        this.append(draggedPiece);
    });
}
}