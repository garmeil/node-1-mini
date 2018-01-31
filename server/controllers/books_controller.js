let books = [];

let id = 0;

const read = function(req, res, next) {
  return res.json(books);
};
const create = function(req, res, next) {
  const { title, author } = req.body;
  books.push({ id, title, author });
  id++;
  res.status(200).send(books);
};
const update = (req, res, next) => {
  const updateID = req.params.id;
  let index = books.findIndex(book => book.id === updateID);

  books[index] = {
    id: books[index].id,
    title: req.body.title || books[index].title,
    author: req.body.author || books[index].author
  };
  res.json(books);
};

const destroy = (req, res, next) => {
  const deleteId = req.params.id;
  let bookID = books.findIndex(book => book.id === deleteID);
  books.splice(bookID, 1);
  res.json(books);
};

module.exports = {
  read,
  create,
  update,
  destroy
};
