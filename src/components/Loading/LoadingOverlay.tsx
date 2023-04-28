import { Box, Spinner } from "@chakra-ui/react";
import { useAppContext } from "../../hooks/useAppContext";

const LoadingOverlay: React.FC = () => {
    const { loading } = useAppContext();

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="overlay"
            display={loading ? "flex" : "none"}
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgba(0, 0, 0, 0.4)"
        >
            <Spinner size="xl" color="white" />
        </Box>
    );
};

export default LoadingOverlay;