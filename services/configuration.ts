import { ParamGet, ParamGetWithId } from "@models/base";
import { ConfigurationType } from "@models/configuration";
import apiLinks from "@utils/api-links";
import httpClient from "@utils/http-client";

const getAllConfigurationByAdmin = async (
  token: string
): Promise<ConfigurationType> => {
  const response = await httpClient.get({
    url: `${apiLinks.configuration.getPriceConfiguration}`,
    token: token,
  });
  return response.data;
};

const updatePriceConfigurationByAdmin = async (
  token: string,
  model: ConfigurationType
): Promise<ConfigurationType> => {
  const response = await httpClient.put({
    url: `${apiLinks.configuration.updatePriceConfiguration}`,
    token: token,
    data: model,
  });
  return response.data;
};

const configuration = {
  getAllConfigurationByAdmin,
  updatePriceConfigurationByAdmin,
};

export default configuration;
