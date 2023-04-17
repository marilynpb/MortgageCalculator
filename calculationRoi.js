const slidersValues=[]; //sliders Values
const WithAutomationSoftware=[20,10,1,15,15] // backend calculation values
const revenueLossDuetoVacany=[0,0,0,0,0,0,0,0,0]
const percentageRevenue=[66,2,13,4,11,4]
/**
 * These are the fields with its calulation
 * fieldID - ID on HTML Tag
 * Value - integer value of the field
 * valueFormatted - the formatted value of the field i.e Value=1000000 valueFormated $1.000.000
 * onEnter - The function that has the calculate of the field
 */
const fields =[
    //with automation
    {id:0,fieldID : "management-fees-2",value: 0,valueFormatted: "0", onEnter: function(){ return calulate_management_fees(this.id); }},
    {id:1,fieldID : "application-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_application_fees(this.id); }},
    {id:2,fieldID : "leasing-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_leasing_fee(this.id); }},  
    {id:3,fieldID : "owner-fees-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_owner_fees(this.id); }},
    {id:4,fieldID : "tenant-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_tenant_fees(this.id); }},
    {id:5,fieldID : "other-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_other(this.id); }}, 
    {id:6,fieldID : "revenue-loss-due-to-vacancy-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_revenue_loss_due_to_vacancy_with_Automation(this.id); }},
    {id:7,fieldID : "gross-profit-year-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_gross_profit_with_Automation(this.id); }},
    {id:8,fieldID : "salaries-personnel-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_salaries_personnel_with_Automation(this.id); }},
    {id:9,fieldID : "new-owner-advertising-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_owner_advertising_with_Automation(this.id); }},
    {id:10,fieldID : "facilities-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_facilities_with_Automation(this.id); }},
    {id:11,fieldID : "other-operating-expenses-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_total_other_operating_expenses_with_automation(this.id); }},
    {id:12,fieldID : "payroll-taxes-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_total_payroll_taxes_with_Automation(this.id); }},
    {id:13,fieldID : "new-software-cost-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_software_cost_with_automation(this.id); }}, 
    {id:14,fieldID : "operating-expenses-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_operating_expenses_with_automation(this.id); }},
    {id:15,fieldID : "net-operating-income-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_with_Automation(this.id); }},
    {id:16,fieldID : "net-operating-income-porcentage-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_percentage_with_Automation(this.id); }},
    {id:17,fieldID : "days-to-pay-off-new-technology-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_days_to_pay_off_new_technology_with_Automation(this.id); }},
    //without automation
    {id:18,fieldID : "management-fees-1",value: 0,valueFormatted: "0", onEnter: function(){ return calulate_management_fees(this.id); }},
    {id:19,fieldID : "application-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_application_fees(this.id); }},
    {id:20,fieldID : "leasing-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_leasing_fee(this.id); }},
    {id:21,fieldID : "owner-fees-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_owner_fees(this.id); }},
    {id:22,fieldID : "tenant-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_tenant_fees(this.id); }},
    {id:23,fieldID : "other-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_other(this.id); }},
    {id:24,fieldID : "revenue-loss-due-to-vacancy-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_revenue_loss_due_to_vacancy(this.id); }},
    {id:25,fieldID : "gross-profit-year-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_gross_profit(this.id); }},
    {id:26,fieldID : "salaries-personnel-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_salaries_personnel(this.id); }},
    {id:27,fieldID : "new-owner-advertising-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_owner_advertising(this.id); }},
    {id:28,fieldID : "facilities-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_facilities(this.id); }},
    {id:29,fieldID : "other-operating-expenses-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_total_other_operating_expenses(this.id); }},
    {id:30,fieldID : "payroll-taxes-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_total_payroll_taxes(this.id); }},
    {id:31,fieldID : "operating-expenses-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_operating_expenses(this.id); }},
    {id:32,fieldID : "net-operating-income-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income(this.id); }},
    {id:33,fieldID : "net-operating-income-porcentage-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_percentage(this.id); }},
    
    {id:34,fieldID : "net-operating-income-increase",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_increase_summary(this.id); }},
    {id:35,fieldID : "revenue-recovered-from-vacancy-loss",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_revenue_recovered_from_vacancy_loss_summary(this.id); }},
    {id:36,fieldID : "noi-increase",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_noi_increase_summary(this.id); }},
    {id:37,fieldID : "time-to-pay-off-new-technology",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_time_to_pay_off_new_technology_sumamry(this.id); }},
    {id:38,fieldID : "new-technology-roi-multiple",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_technology_roi_multiple_summary(this.id); }},
    {id:39,fieldID : "total-opex",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_total_opex_summary(this.id); }},

];

function createSliders(){
    const slidersID=['customRange1','customRange2','customRange3','customRange4',
    'customRange5','customRange6','customRange7','customRange8','customRange9'] //amount of sliders
    const slidersInfo=['rangeValue1','rangeValue2','rangeValue3','rangeValue4',
    'rangeValue5','rangeValue6','rangeValue7','rangeValue8','rangeValue9'] //amount of sliders
    for (let i=0; i<=slidersID.length-1; i++){
        let range=document.getElementById(slidersID[i]);
        let rangeValue=document.getElementById(slidersInfo[i]);
        if (i>=4){
            rangeValue.innerHTML = range.value + " %";
        }else{
            rangeValue.innerHTML = range.value
        }
        slidersValues[i]=parseInt(range.value);    
        range.addEventListener('input', () => { 
            if (i>=4){
                rangeValue.innerHTML = range.value + " %";
            }else{
                rangeValue.innerHTML = range.value
            }
            let pos = slidersID.indexOf(range.id);
            slidersValues[pos]=parseInt(range.value);
            calculateBackEndValues(); 
            calculateAll(); 
        });
    }
}
//trigger all middleware calculations.
function calculateBackEndValues(){
    revenueLossDuetoVacany[0]= 365
    revenueLossDuetoVacany[1] = slidersValues[0] * revenueLossDuetoVacany[0]
    revenueLossDuetoVacany[2] = revenueLossDuetoVacany[1] * (slidersValues[3] / 100) 
    revenueLossDuetoVacany[3] = slidersValues[1] / 30
    revenueLossDuetoVacany[4] = revenueLossDuetoVacany[3] * revenueLossDuetoVacany[2]
    revenueLossDuetoVacany[5] = revenueLossDuetoVacany[4] * (slidersValues[2] / 100) 
    revenueLossDuetoVacany[6] = revenueLossDuetoVacany[2] * revenueLossDuetoVacany[3]
    revenueLossDuetoVacany[7] = revenueLossDuetoVacany[5] + revenueLossDuetoVacany[6]
    revenueLossDuetoVacany[8] = revenueLossDuetoVacany[3] * (slidersValues[2] / 100) + slidersValues[1]
}
//trigger all the calculations.
function calculateAll(){
    for (let i=0;i<=fields.length-1; i++){
        document.getElementById(fields[i].fieldID).value = fields[i].onEnter();
    }    
}


function calculate_total_opex(val){
    let value=0;
    for (let i=3; i<=10;i++){
        value += slidersValues[i];
    }
    fields[val].value = value;
    fields[val].valueFormatted = fields[val].value.toFixed(1)+" %";
    return fields[val].valueFormatted;
}

/**
 * 
 * Calculator both
 *
 */

function calulate_management_fees(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[0]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_application_fees(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[1]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_leasing_fee(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[2]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_owner_fees(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[3]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_tenant_fees(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[4]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_other(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[5]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}



/**
 * 
 * Calculator with automation
 *
 */
function calculate_revenue_loss_due_to_vacancy_with_Automation(val){
    fields[val].value = (1-(WithAutomationSoftware[0]/100)) * fields[24].value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_gross_profit_with_Automation(val){
    let value=0;
    for (let i=0; i<=6;i++){
        value += fields[i].value;
    }
    fields[val].value = value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_salaries_personnel_with_Automation(val){
    fields[val].value = fields[26].value * (1-WithAutomationSoftware[4]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_new_owner_advertising_with_Automation(val){
    fields[val].value = fields[27].value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_facilities_with_Automation(val){
    fields[val].value = fields[28].value * (1-WithAutomationSoftware[3]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_total_other_operating_expenses_with_automation(val){
    fields[val].value = fields[29].value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_total_payroll_taxes_with_Automation(val){
    fields[val].value = fields[30].value * (1-WithAutomationSoftware[4]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_new_software_cost_with_automation(val){
    fields[val].value = WithAutomationSoftware[2] * slidersValues[0] * 12
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_operating_expenses_with_automation(val){
    let value=0;
    for (let i=8; i<=13;i++){
        value += fields[i].value;
    }
    fields[val].value = value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income_with_Automation(val){
    fields[val].value =  fields[7].value - fields[14].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income_percentage_with_Automation(val){
    fields[val].value = (fields[15].value / fields[7].value)*100;
    fields[val].valueFormatted = fields[val].value.toFixed(2) + " %";
    return fields[val].valueFormatted;
}

function calculate_days_to_pay_off_new_technology_with_Automation(val){
    fields[val].value =  fields[13].value / ((fields[31].value - fields[14].value)/365) ;
    fields[val].valueFormatted = fields[val].value.toFixed(2) +  " Days";
    return fields[val].valueFormatted;
}

/**
 * 
 * Calculator without automation
 *
 */

function calculate_revenue_loss_due_to_vacancy(val){

    fields[val].value = revenueLossDuetoVacany[7] * -1;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_gross_profit(val){
    let value=0;
    for (let i=17; i<=24;i++){
        value += fields[i].value;
    }
    fields[val].value = value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_salaries_personnel(val){
    fields[val].value = fields[18].value * (slidersValues[4]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_new_owner_advertising(val){
    fields[val].value = fields[18].value * (slidersValues[5]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_facilities(val){
    fields[val].value = fields[18].value * (slidersValues[6]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_total_other_operating_expenses(val){
    fields[val].value = fields[18].value * (slidersValues[7]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_total_payroll_taxes(val){
    fields[val].value = fields[18].value * (slidersValues[8]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_operating_expenses(val){
    let value=0;
    for (let i=26; i<=30;i++){
        value += fields[i].value;
    }
    fields[val].value = value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income(val){
    fields[val].value =  fields[25].value - fields[31].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income_percentage(val){
    fields[val].value =  (fields[32].value / fields[25].value)*100;
    fields[val].valueFormatted = fields[val].value.toFixed(2) + " %";
    return fields[val].valueFormatted;
}
/**
 * 
 * Calculator summary
 */
function calculate_net_operating_income_increase_summary(val){
    fields[val].value =(fields[32].value - fields[15].value)*-1;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_revenue_recovered_from_vacancy_loss_summary(val){
    fields[val].value = (fields[24].value - fields[6].value)*-1;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_noi_increase_summary(val){
    fields[val].value = (fields[33].value - fields[16].value)*-1;
    fields[val].valueFormatted = fields[val].value.toFixed(2);
    return fields[val].valueFormatted;
}

function calculate_time_to_pay_off_new_technology_sumamry(val){
    fields[val].value = fields[17].value
    fields[val].valueFormatted = fields[val].value.toFixed(2) + " %";
    return fields[val].valueFormatted;
}

function calculate_new_technology_roi_multiple_summary(val){
    fields[val].value = fields[34].value / fields[13].value 
    fields[val].valueFormatted = "X "+fields[val].value.toFixed(1);
    return fields[val].valueFormatted;
}

function calculate_total_opex_summary(val){
    let value=0;
    for (let i=4; i<=8;i++){
        value += slidersValues[i];
    }
    fields[val].value = value;
    fields[val].valueFormatted = fields[val].value.toFixed(0)+" %";
    return fields[val].valueFormatted;
}

//helpers
function reducirNumero(numero) {
    var opciones = { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true, currency: 'USD' };
    if (numero >= 1000000) {
      return "$ " + (numero / 1000000).toFixed(1) + 'M';
    } else if (numero >= 200000) {
      return "$ " + (numero / 1000).toFixed(0) + 'k';
    } else {
        return "$ "+ numero.toLocaleString('en-US', opciones);
    }
}

createSliders();
