import flame from "./../assets/flame.svg?raw";
import spa from "./../assets/spa.svg?raw";
import electricbolt from "./../assets/electricbolt.svg?raw";
import waterdrop from "./../assets/waterdrop.svg?raw";
import poison from "./../assets/poison.svg?raw";
import normal from "./../assets/normal.svg?raw";
import bug from "./../assets/bug.svg?raw";
import fairy from "./../assets/fairy.svg?raw";
import ground from "./../assets/ground.svg?raw";
import psychic from "./../assets/psychic.svg?raw";
import fight from "./../assets/fight.svg?raw";
import ghost from "./../assets/ghost.svg?raw";
import rock from "./../assets/rock.svg?raw";
import ice from "./../assets/ice.svg?raw";
import dragon from "./../assets/dragon.svg?raw";
import dark from "./../assets/dark.svg?raw";
import steel from "./../assets/steel.svg?raw";

export const typeColor = (type: string) => {
    switch (type) {
      case "water":
        return "84, 158, 222";
      case "fire":
        return "240, 128, 48";
      case "grass":
        return "120, 200, 80";
      case "electric":
        return "248, 208, 48";
      case "poison":
        return "160, 64, 160";
      case "normal":
        return "168, 168, 120"
      case "bug":
        return "168, 184, 32"
      case "fairy":
        return "238, 153, 172"
      case "ground":
        return "224, 192, 104"
      case "psychic":
        return "248, 88, 136"
      case "fighting":
        return "192, 48, 40"
      case "rock":
        return "184, 160, 56"
      case "ghost":
        return "112, 88, 152"
      case "ice":
        return "152, 216, 216"
      case "dragon":
        return "112, 56, 248"
      case "dark":
        return "119, 85, 68"
      case "steel":
        return "170, 170, 187"
      default:
        return "128, 128, 128";
    }
  }

  export const typeIcon = (type: string) => {
    switch (type) {
      case "water":
        return waterdrop;
      case "fire":
        return flame;
      case "grass":
        return spa;
      case "electric":
        return electricbolt;
      case "poison":
        return poison;
      case "normal":
        return normal
      case "bug":
        return bug
      case "fairy":
        return fairy
      case "ground":
        return ground
      case "psychic":
        return psychic
      case "fighting":
        return fight
      case "rock":
        return rock
      case "ghost":
        return ghost
      case "ice":
        return ice
      case "dragon":
        return dragon
      case "dark":
        return dark
      case "steel":
        return steel
      default:
        return "";
    }
  }