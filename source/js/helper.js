//ENG
//Helper functions for SkullEngine
//SPA
//Funciones de ayuda para SkullEngine

//ENG
//clamps the value x to the range [a,b]
//function returns the clamped value
//SPA
//limita el valor x a un rango entre [a,b]
//la funcion regresa el valor limitado
function clamp(x, a, b)
{
    if(x < a)
    {
        return a;
    }
    else if(x > b)
    {
        return b;
    }
    
    return x;
}

//returns a predefined position commonly used in visual novels
//             Screen
//*------------------------------*
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//*------------------------------*
//        |       |       |
//       left   center   right

function alignX(presetPos, screenWidth)
{
    switch(presetPos)
    {
        //left
        case 0:
            return (screenWidth / 4);
            break;
        //center
        case 1:
            return (screenWidth / 4) * 2;
            break;
        //right
        case 2:
            return (screenWidth / 4) * 3;
            break;
        default:
            return 0;
            break;
    }
}