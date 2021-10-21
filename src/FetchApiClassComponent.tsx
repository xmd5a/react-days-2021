import { Component } from "react";

type State = {
  error: string | null;
  isLoading: boolean;
  data: any;
};

export class FetchApiClassComponent extends Component<null, State> {
  state = {
    error: null,
    isLoading: true,
    data: []
  };

  componentDidMount() {
    fetch("https://616bef1e16c3fa001717184a.mockapi.io/react-days/users")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            data
          });
        },
        (error: Error) => {
          this.setState({
            error: error.message
          });
        }
      )
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    const { error, isLoading, data } = this.state;

    if (isLoading) return <h3>Loading...</h3>;
    if (error)
      return (
        <div>
          <h3>Error!</h3>
          <pre>{error}</pre>
        </div>
      );

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
}
