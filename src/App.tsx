import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        //for mobile devices layout
        base: `"nav"
              "main"`,
        //for larger devices layout
        lg: `"nav nav" 
              "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        {/* only render on large screens and above */}
        <GridItem area="aside" bg="gold" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
