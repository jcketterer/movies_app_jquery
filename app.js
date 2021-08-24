let currentId = 0;

let movieList = [];

$(function () {
  $('#new-movie-form').on('submit', function (e) {
    e.preventDefault();

    let title = $('#title').val();
    let rating = $('#rating').val();

    let movieData = { title, rating, currentId };
    const appendHTML = movieDataTable(movieData);

    currentId++;
    movieList.push(movieData);

    $('#movie-table-body').append(appendHTML);
    $('#new-movie-form').trigger('reset');
  });

  $('tbody').on('click', '.deletebtn', function (e) {
    let indexToRemove = movieList.findIndex(movie => movie.currentId === +$(e.target).data('deleteId'))

    movieList.splice(indexToRemove, 1);

    $(e.target).closest('tr').remove();
  });
});

function movieDataTable(movie) {
  return `
    <tr>
      <td>${ movie.title }</td>
      <td>${ movie.rating }</td>
      <td>  
        <button class="deletebtn" data-delete-id=${ movie.currentId }>
          Delete
        </button>
      </td>
    </tr>  
  `;
}