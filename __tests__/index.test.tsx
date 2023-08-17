/* eslint-disable no-undef */
import Home from "@/app/page";
import { getPlans } from "@/lib/mocks/api";
import { mockData } from "@/lib/mocks/mockData";

import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Home", () => {
	beforeEach(() => {
		// Mock the API function's implementation to return the mock data
		getPlans.mockResolvedValue(mockData);
	});
	// it('list 30 plans', async () => {
	//   // await act(async () => {
	//   //   const { queryAllByTestId, container } = render(await Home());
	//   //   const plans = await queryAllByTestId('plan-card');
	//   //   await expect(plans).toHaveLength(30);
	//   // });

	//   // await act(async () => {
	//   //   render(await Home());
	//   //   const plans = screen.getAllByTestId('plan-card');
	//   //   expect(plans).toHaveLength(30);
	//   // });
	// });
	it("renders a heading", async () => {
		await act(async () => {
			render(await Home());
		});
	});
	// it('snapshot', async () => {
	//   await act(async () => {
	//     const { container } = await render(<Home />);
	//     expect(container).toMatchSnapshot();
	//   });
	// });
});
