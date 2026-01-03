export class Lobby {
    private players = new Set<string>();

    add(playerId: string) {
        if (this.players.has(playerId)) {
            throw new Error("Player already in lobby");
        }
        this.players.add(playerId);
    }

    remove(playerId: string) {
        this.players.delete(playerId);
    }

    list(): string[] {
        return Array.from(this.players);
    }

    has(playerId: string) {
        return this.players.has(playerId);
    }
}