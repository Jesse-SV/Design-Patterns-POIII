export default class TrackCode {
    private _trackcode: string = "";

    public get trackcode(): string {
        this.generateTrackCode();
        return this._trackcode;
    }

    public generateTrackCode(): void {
        let trackCode = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 20; i++) {
            trackCode += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        this._trackcode = trackCode;
    }
}
