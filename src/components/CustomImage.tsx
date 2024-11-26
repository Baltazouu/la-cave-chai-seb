import * as React from "react";
import {StyledCard} from "./styled-card/StyledCard";


export default function CustomImage(
    {img,alt} : {img : string,alt:string}) {
    return(
        <StyledCard>
        <img
            src={img}
            alt={alt}
            style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        </StyledCard>
    );
}