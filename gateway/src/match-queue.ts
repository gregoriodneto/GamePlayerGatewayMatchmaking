export class MatchQueue {
    private queue = new Set<string>();

    add(playerId: string) {
        if (this.queue.has(playerId)) {
            throw new Error("Player already in Queue");
        }
        this.queue.add(playerId);
    }

    remove(playerId: string) {
        this.queue.delete(playerId);
    }

    list(): string[] {
        return Array.from(this.queue);
    }

    has(playerId: string) {
        return this.queue.has(playerId);
    }
}