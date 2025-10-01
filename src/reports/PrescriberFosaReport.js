import { Grid, IconButton } from "@material-ui/core";
import { PublishedComponent, useModulesManager, useTranslations, ControlledField } from "@openimis/fe-core";
import React from "react";

const  PrescriberFosaReport = (props) => {
  const { values, setValues } = props;
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations("claim", modulesManager);

  return (
    <Grid container direction="column" spacing={1}>      
      <Grid item>
        <PublishedComponent
          pubRef="core.DatePicker"
          value={values.dateStart}
          module="claim"
          required
          label="ClaimPercentageReferralsReport.dateStart"
          onChange={(dateStart) => setValues({ ...values, dateStart })}
        />
      </Grid>
      <Grid item>
        <PublishedComponent
          pubRef="core.DatePicker"
          value={values.dateEnd}
          module="claim"
          required
          label="ClaimPercentageReferralsReport.dateEnd"
          onChange={(dateEnd) => setValues({ ...values, dateEnd })}
        />
      </Grid>
      <Grid item>
        <PublishedComponent
          pubRef="location.HealthFacilityPicker"
          onChange={(hf) => setValues({ ...values, hf })}
          value={values.hf}
          required
          label={formatMessage("PrescriberReport.hf")}
        />
      </Grid>

    </Grid>
  );
};

export default PrescriberFosaReport;