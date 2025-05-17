import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App.tsx";

describe("App", () => {
	it("renders App component", () => {
		render(<App />);

		expect(screen.getByText("Hello World")).toBeInTheDocument();
	});
});
