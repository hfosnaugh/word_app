const Game = () => {
  //return <h1 style={{ textAlign: "center" }} className='display-2'>Game</h1>;
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }} className='display-2'>Game</h1>
    <form method="post" onSubmit={handleSubmit}>
        <label>
          Enter a new word that can 'fit' into the word:
          <textarea
            name="newWord"
            rows={4}
            cols={40}
          />
        </label>
        <hr />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Game;
//defines single JSX component for each page and returns it as a simple element

//working on game formatting today