import { Container, Box, Heading, Text, VStack, HStack, Image, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const articles = [
  {
    title: "Global Market Trends",
    description: "An in-depth analysis of the current global market trends and their implications.",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBtYXJrZXR8ZW58MHx8fHwxNzE3MDA5ODE1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Climate Change Impact",
    description: "How climate change is affecting different regions around the world.",
    image: "https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlfGVufDB8fHx8MTcxNzAwOTgxNnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Tech Innovations",
    description: "The latest innovations in technology and their potential to change the world.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5ub3ZhdGlvbnN8ZW58MHx8fHwxNzE3MDA5ODE2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" my={8}>
          Worldwide News
        </Heading>
        {articles.map((article, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
            <Image src={article.image} alt={article.title} />
            <Box p={6}>
              <Heading as="h2" size="lg" mb={4}>
                {article.title}
              </Heading>
              <Text mb={4}>{article.description}</Text>
              <Link color="teal.500" href="#">
                Read more...
              </Link>
            </Box>
          </Box>
        ))}
        <HStack spacing={4} mt={8}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
