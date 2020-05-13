/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as Colors from "colors";

export class Neon {

	private _isEnabled: boolean = false;
	private _title: string = "Neon";
	private _bufferEncoding: "utf8" | "hex" | "base64" = "hex";

	private formatValue(value: any): string {

		if (typeof value === "string") return value;
		else if (typeof value === "number") return value.toLocaleString();
		else if (typeof value === "boolean") return value ? "true" : "false";
		else if (Buffer.isBuffer(value)) {
			const data: Buffer = value;
			return Colors.yellow(this._bufferEncoding + " -> ") + data.toString(this._bufferEncoding);
		}
		else if (typeof value === "object") {
			if (value instanceof Error) return value.message;
			return JSON.stringify(value);
		}
		else return value + "";

	}

	private getType(value: any, showType: boolean): string {

		if (!showType) return "";

		let retValue: string = typeof value;
		if (Buffer.isBuffer(value)) retValue = "Buffer";
		else if (value instanceof Error) retValue = "Error";
		else if (Array.isArray(value)) retValue = "Array";

		return Colors.gray(retValue + ":\t");
	}

	public log(value: any, showType: boolean = true, title: string = this._title): void {

		if (!this._isEnabled) return;

		const date: Date = new Date();
		console.log(Colors.green(Colors.bold(title) + (` (${date.toLocaleTimeString()} @ ${date.getMilliseconds()}ms)`)) + `\t${this.getType(value, showType)}${this.formatValue(value)}`);

	}

	public err(value: any, showStack: boolean = false, showType: boolean = true, title: string = this._title): void {

		if (!this._isEnabled) return;

		const date: Date = new Date();
		console.error(Colors.red(Colors.bold(title) + (` (${date.toLocaleTimeString()} @ ${date.getMilliseconds()}ms)`)) + `\t${this.getType(value, showType)}${this.formatValue(value)}` + (showStack ? Colors.gray(new Error().stack?.replace("Error", "").replace(RegExp("    at ", "g"), Colors.red(" -> ")) ?? "") : ""));

	}

	public enable(): void { this._isEnabled = true; }
	public disable(): void { this._isEnabled = false; }
	public isEnabled(): boolean { return this._isEnabled; }
	public setTitle(title: string = "Neon"): void { this._title = title; }
	public clearTitle(): void { this.setTitle(); }
	public setBufferCoding(coding: "utf8" | "hex" | "base64" = "hex"): void { this._bufferEncoding = coding; }

}