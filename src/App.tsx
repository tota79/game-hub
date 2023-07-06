import { Grid, GridItem, Show } from "@chakra-ui/react";

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
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        {/* only render on large screens and above */}
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
