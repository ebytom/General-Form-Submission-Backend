const mongoose = require("mongoose");

const Form2Schema = new mongoose.Schema({
  form2Id: {
    type: Number,
  },
  facility_pic_ent: {
    type: String,
  },
  facility_pic: {
    type: String,
  },
  facility_name: {
    type: String,
  },
  facility_location: {
    type: String,
  },
  facility_address: {
    type: String,
  },
  dateInput: {
    type: Object,
  },
  f_operation: {
    type: Array,
  },
  facility_category: {
    type: String,
  },
  product_mfd: {
    type: String,
  },
  prod_capacity: {
    type: String,
  },
  number_of_shifts: {
    type: String,
  },
  hr_shift: {
    type: String,
  },
  wrk_frc: {
    type: String,
  },
  cert_obtained: {
    type: String,
  },
  cert_planned: {
    type: String,
  },
  award_recieved: {
    type: String,
  },
  elec_energy_src: {
    type: Array,
  },
  baseline_data_period: {
    type: String,
  },
  total_elec_consumption: {
    type: String,
  },
  annual_elec_consumption: {
    type: String,
  },
  wind_elec_generation: {
    type: String,
  },
  solar_elec_generation: {
    type: String,
  },
  annual_energy_cost: {
    type: String,
  },
  energy_cost: {
    type: String,
  },
  genset_diesel_consumption: {
    type: String,
  },
  boiler_diesel_consumption: {
    type: String,
  },
  annual_diesel_cost: {
    type: String,
  },
  petrol_consumption_logistics: {
    type: String,
  },
  petrol_cost_logistics: {
    type: String,
  },
  boiler_fuel: {
    type: Array,
  },
  boiler_fuel_quantity: {
    type: String,
  },
  boiler_fuel_cost: {
    type: String,
  },
  annual_production_quantity: {
    type: String,
  },
  src_water: {
    type: Array,
  },
  qty_fresh_water: {
    type: String,
  },
  total_qty_water: {
    type: String,
  },
  cost_fresh_water: {
    type: String,
  },
  cost_recovered_water: {
    type: String,
  },
  zld: {
    type: String,
  },
  effluent_treatment: {
    type: String,
  },
  water_quality: {
    type: String,
  },
  domestic_water_consumption: {
    type: String,
  },
  garden_area: {
    type: String,
  },
  garden_use: {
    type: String,
  },
  garden_and_domestic_water_use_ob: {
    type: String,
  },
  src_fuel: {
    type: Array,
  },
  pic_ob_at_power_house: {
    type: String,
  },
  assess_ob_at_power_house: {
    type: String,
  },
  pic_ob_at_compressor: {
    type: String,
  },
  assess_ob_at_compressor: {
    type: String,
  },
  pic_ob_at_genset: {
    type: String,
  },
  assess_ob_at_genset: {
    type: String,
  },
  assess_ob_at_other: {
    type: String,
  },
  pic_ob_at_boiler: {
    type: String,
  },
  assess_ob_at_boiler: {
    type: String,
  },
  pic_ob_at_thermopac: {
    type: String,
  },
  assess_ob_at_thermopac: {
    type: String,
  },
  pic_ob_at_other: {
    type: String,
  },
  scope_comp_air: {
    type: Array,
  },
  compressed_air_saving: {
    type: String,
  },
  lighting_observation: {
    type: String,
  },
  lighting_saving: {
    type: String,
  },
  lighting_est_investment: {
    type: String,
  },
  lighting_est_savings: {
    type: String,
  },
  lighting_systems_photo: {
    type: String,
  },
  electrical_motors_observations: {
    type: String,
  },
  total_elec_motors: {
    type: String,
  },
  elec_motors: {
    type: Array,
  },
  energy_saving_opportunities_in_electrical_motors: {
    type: String,
  },
  estimated_savings_motor_upgradation: {
    type: String,
  },
  waste_heat_recovery_observations: {
    type: String,
  },
  scope_waste: {
    type: Array,
  },
  waste_heat_recovery_fuel_savings: {
    type: String,
  },
  pic_ob_raw_material: {
    type: String,
  },
  assessment_observation_at_raw_material_inward: {
    type: String,
  },
  pic_ob_material_handling: {
    type: String,
  },
  assessment_observation_at_material_handling: {
    type: String,
  },
  production_machine_utilization_data_collection_aspects: {
    type: String,
  },
  pic_production_machine_util: {
    type: String,
  },
  production_layout_observations: {
    type: String,
  },
  production_layout_ob_photo: {
    type: String,
  },
  installation_monitoring_systems: {
    type: String,
  },
  mgmt_on_energy_resource: {
    type: String,
  },
  opportunities_in_the_facility: {
    type: String,
  },
  material_conservation_opportunities: {
    type: String,
  },
  water_reuse_opportunities: {
    type: String,
  },
  scope_for_renewable: {
    type: String,
  },
  details_of_renewable_energy: {
    type: String,
  },
  pic_renewable_energy: {
    type: String,
  },
  annual_rainfall: {
    type: String,
  },
  total_roof_area: {
    type: String,
  },
  rwh_scope: {
    type: Array,
  },
  rw_harvesting_observation: {
    type: String,
  },
  water_saving_opportunties: {
    type: String,
  },
  obs_on_safety: {
    type: String,
  },
  obs_on_safety_img: {
    type: String,
  },
  obs_on_safety_crit: {
    type: String,
  },
  obs_on_safety_prod_photo: {
    type: String,
  },
  obs_on_safety_prod: {
    type: String,
  },
  obs_on_safety_elec_photo: {
    type: String,
  },
  obs_on_safety_elec: {
    type: String,
  },
  obs_on_safety_chem_photo: {
    type: String,
  },
  obs_on_safety_chem: {
    type: String,
  },
  obs_on_safety_fire_photo: {
    type: String,
  },
  obs_on_safety_fire: {
    type: String,
  },
  obs_on_elec_earth: {
    type: String,
  },
  obs_on_elec_earth_photo: {
    type: String,
  },
  overall_obs_on_safety_photo: {
    type: String,
  },
  specific_energy: {
    type: String,
  },
  specific_water: {
    type: String,
  },
  specific_fuel: {
    type: String,
  },
  specific_fuel_cost: {
    type: String,
  },
  specific_water_cost: {
    type: String,
  },
  specific_water_cost1: {
    type: String,
  },

  energy_savings: {
    type: String,
  },
  fuel_savings: {
    type: String,
  },
  water_savings: {
    type: String,
  },
  rwh: {
    type: String,
  },
  material_savings: {
    type: String,
  },
  ct_opportunities: {
    type: String,
  },

  savings1: {
    type: String,
  },
  savings2: {
    type: String,
  },
  savings3: {
    type: String,
  },
  savings4: {
    type: String,
  },
  savings5: {
    type: String,
  },
  investments: {
    type: String,
  },
  investments1: {
    type: String,
  },
  investments2: {
    type: String,
  },
  investments3: {
    type: String,
  },
  investments4: {
    type: String,
  },
  investments5: {
    type: String,
  },
  investments6: {
    type: String,
  },
  investments7: {
    type: String,
  },
  investments8: {
    type: String,
  },
  investments65: {
    type: String,
  },
});

module.exports = mongoose.model("Form2", Form2Schema);
