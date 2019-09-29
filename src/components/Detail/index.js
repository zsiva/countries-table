import React from "react";
import { Grid, Modal } from "semantic-ui-react";
import formatNumber from "../../utils/formatNumber";
import formatPrice from "../../utils/formatPrice";
import ItemDetail from "./ItemDetail";
import "./styles.css";

export default function Detail(props) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Modal.Header>{props.name}</Modal.Header>
      <Modal.Content>
        <div className="detailWrapper">
          <Grid>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              <h5>Population</h5>
              <ItemDetail
                name="Number of inhabitants"
                value={formatNumber(props.population)}
                icon="users"
              />
              <ItemDetail
                name="Average age"
                value={props.median_age}
                icon="user"
              />
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              <h5>Indexes</h5>
              <ItemDetail
                name="Happiness"
                value={formatNumber(props.happiness_index)}
                icon="smile outline"
              />
              <ItemDetail
                name="Bigmac price average"
                value={formatPrice(props.bigmac_index)}
                icon="dollar"
              />
            </Grid.Column>
          </Grid>
        </div>
      </Modal.Content>
    </Modal>
  );
}
