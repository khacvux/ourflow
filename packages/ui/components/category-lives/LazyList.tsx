import { Heading, Grid, GridItem, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Card from "../cards/Card";

interface props {
  title?: string;
}

function LazyList({ title }: props) {
  return (
    <div className="mb-3 mt-8 px-[25px] w-full flex-1">
      <div className="flex w-full cursor-pointer flex-row items-center justify-start mb-10">
        <Heading className="text-white text-3xl font-bold">{title}</Heading>
      </div>
      <div className="my-3">
        <Grid templateColumns="repeat(4, 1fr)" gap={16}>
          <GridItem
            w="100%"
            h="301"
            bg="#191919"
            className="overflow-hidden rounded-lg"
          >
            <Card
              streamerBanner="https://i.pinimg.com/564x/e0/7a/b3/e07ab366abf8f9721cd4bfac4920150a.jpg"
              title="Dung nhan sai cai cho thay"
              name="baga"
              avatar="https://i.pinimg.com/564x/67/20/3b/67203b2afa669fa70c140aaf8a4f181c.jpg"
              sid="lksdjfl"
            />
          </GridItem>
          <GridItem
            w="100%"
            h="301"
            bg="#191919"
            className="overflow-hidden rounded-lg"
          >
            <Card
              streamerBanner="https://i.pinimg.com/564x/e0/7a/b3/e07ab366abf8f9721cd4bfac4920150a.jpg"
              title="Dung nhan sai cai cho thay"
              name="baga"
              avatar="https://i.pinimg.com/564x/67/20/3b/67203b2afa669fa70c140aaf8a4f181c.jpg"
              sid="lksdjfl"
            />
          </GridItem>
          <GridItem
            w="100%"
            h="301"
            bg="#191919"
            className="overflow-hidden rounded-lg"
          >
            <Card
              streamerBanner="https://i.pinimg.com/564x/e0/7a/b3/e07ab366abf8f9721cd4bfac4920150a.jpg"
              title="Dung nhan sai cai cho thay"
              name="baga"
              avatar="https://i.pinimg.com/564x/67/20/3b/67203b2afa669fa70c140aaf8a4f181c.jpg"
              sid="lksdjfl"
            />
          </GridItem>
          <GridItem
            w="100%"
            h="301"
            bg="#191919"
            className="overflow-hidden rounded-lg"
          >
            <Card
              streamerBanner="https://i.pinimg.com/564x/e0/7a/b3/e07ab366abf8f9721cd4bfac4920150a.jpg"
              title="Dung nhan sai cai cho thay"
              name="baga"
              avatar="https://i.pinimg.com/564x/67/20/3b/67203b2afa669fa70c140aaf8a4f181c.jpg"
              sid="lksdjfl"
            />
          </GridItem>
          <GridItem
            w="100%"
            h="301"
            bg="#191919"
            className="overflow-hidden rounded-lg"
          >
            <Card
              streamerBanner="https://i.pinimg.com/564x/e0/7a/b3/e07ab366abf8f9721cd4bfac4920150a.jpg"
              title="Dung nhan sai cai cho thay"
              name="baga"
              avatar="https://i.pinimg.com/564x/67/20/3b/67203b2afa669fa70c140aaf8a4f181c.jpg"
              sid="lksdjfl"
            />
          </GridItem>
        
        </Grid>
      </div>
    </div>
  );
}

export default LazyList;
