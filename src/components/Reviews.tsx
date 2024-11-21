import {Avatar, Rating} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import React from "react";
import ReviewsStub from "../data/ReviewsStub";
import {Review} from "../model/Review";
import {Author} from "../model/Author";

const articleInfo: Review[] = ReviewsStub();

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign:'justify'
});

function AuthorInfos({ author }: { author: Author }) {

    const avatarContent = author.avatar ? (
        <Avatar alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
    ) : (
        <Avatar sx={{ width: 24, height: 24 }}>
            {author.name.charAt(0)}
        </Avatar>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
            >
                {avatarContent}
                <Typography variant="caption">
                    {author.name}
                </Typography>
            </Box>
            <Typography variant="caption">July 14, 2021</Typography>
        </Box>
    );
}

export default function Reviews() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    return (
        <Box>
            <Typography variant="h2" gutterBottom>
                Avis clients
            </Typography>
            <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
                {articleInfo.map((article, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: 1,
                                height: '100%',
                            }}
                        >
                            <AuthorInfos author={article.author} />
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {article.description}
                            </StyledTypography>
                            <Rating name="read-only" value={article.stars} precision={0.5} readOnly />

                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
