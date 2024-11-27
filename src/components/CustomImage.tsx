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
                height: '250px',
                width: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        </StyledCard>
    );
}