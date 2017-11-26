import { Tile } from './tile.model';

export class Panel{

    private tiles: Tile[];

    constructor(public panelName: string){
        this.tiles = new Array<Tile>();    
    }

    getTiles() : Tile[]{
        return this.tiles;
    }

    addTile(tile: Tile)
    {
        this.tiles.push(tile);
    }
}