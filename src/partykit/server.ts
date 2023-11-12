import Party from "partykit/server";
import { PartyWorks, Player } from "partyworks-server";

type PlayerState = {
  info: {
    country: string | null;
  };
};

export default class CursorServer extends PartyWorks<PlayerState> {
  customDataOnConnect(
    player: Player<PlayerState>,
    { request }: Party.ConnectionContext
  ): void {
    const country = request.cf?.country ?? (null as any);

    player.setState({
      info: {
        country,
      },
    });
  }
}
