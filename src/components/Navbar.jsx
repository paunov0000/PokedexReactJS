function CreateNavbar() {
  return (
    <div className="gap-5 px-10 py-7 items-start flex flex-col">
      <div>
        <h1 className="text-white">Pokedex</h1>
      </div>
      <div>
        <input type="text" placeholder="Search"></input>
      </div>
    </div>
  );
}

export default CreateNavbar;
