export default class Token{
    private _token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXltZW50MSI6IkpvcmdlIn0.d7MGCnDtmrvMPiCbWns5S9-fVVTeIcZHuS5OzBX2qrQ";

    public get token(): string {
        return this._token;
    }
}