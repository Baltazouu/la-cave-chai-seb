import * as React from "react";
import Box from "@mui/material/Box";


export default function CustomCardMedia(
    {img,alt} : {img : string,alt:string}) {
    return(
        <Box sx={{
                height: {xs:300,sm:400, md:250,lg:300},
                overflow: 'hidden',
                borderBottom: '1px solid',
                borderColor:'divider',
        }}>
            <img
                src={img}
                alt={alt}
                style={{
                    aspectRatio: '16 / 9',
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
        </Box>
    )
}