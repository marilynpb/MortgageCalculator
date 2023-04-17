const slidersValues=[]; //sliders Values
const WithAutomationPercentages=[15,10,1.5,15,10] // backend calculation values


/**
 * These are the fields with its calulation
 * fieldID - ID on HTML Tag
 * Value - integer value of the field
 * valueFormatted - the formatted value of the field i.e Value=1000000 valueFormated $1.000.000
 * onEnter - The function that has the calculate of the field
 */
const fields =[
    {id:0,fieldID : "total_rental_income_1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_total_rental_income(this.id); }},
    {id:1,fieldID : "vacancy-loss-input-year-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_rent_loss_due_to_vacancy(this.id); }},
    {id:2,fieldID : "gross-profit-input-year-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_gross_profit(this.id); }},
    {id:3,fieldID : "utilities-maintenance-input-year-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_utilities_maintenance(this.id); }},
    {id:4,fieldID : "advertising-marketing-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_advertising_marketing(this.id); }},
    {id:5,fieldID : "other-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_other(this.id); }},
    {id:6,fieldID : "general-administrative-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_general_administrative(this.id); }},
    {id:7,fieldID : "salaries-personnel-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_salaries_personnel(this.id); }},
    {id:8,fieldID : "operating-expenses-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_operating_expenses(this.id); }},
    {id:9,fieldID : "net-operating-income-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income(this.id); }},
    {id:10,fieldID : "noi-percentage-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_NOI_percentage(this.id); }},
    {id:11,fieldID : "total_rental_income_2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_total_rental_income(this.id); }},
    {id:12,fieldID : "vacancy-loss-input-year-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_rent_loss_due_to_vacancy_with_Automation(this.id); }},
    {id:13,fieldID : "gross-profit-input-year-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_gross_profit_with_Automation(this.id); }}, 
    {id:14,fieldID : "utilities-maintenance-input-year-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_utilities_maintenance(this.id); }},
    {id:15,fieldID : "advertising-marketing-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_advertising_marketing_with_Automation(this.id); }},
    {id:16,fieldID : "other-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_other(this.id); }},
    {id:17,fieldID : "general-administrative-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_general_administrative_with_Automation(this.id); }},
    {id:18,fieldID : "salaries-personnel-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_salaries_personnel_with_Automation(this.id); }},
    {id:19,fieldID : "new-software-cost-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_software_cost_with_Automation(this.id); }},
    {id:20,fieldID : "operating-expenses-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_operating_expenses_with_Automation(this.id); }},
    {id:21,fieldID : "net-operating-income-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_with_Automation(this.id); }},
    {id:22,fieldID : "noi-percentage-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_NOI_percentage_with_Automation(this.id); }},
    {id:23,fieldID : "revenue-recovered-from-vacancy-loss",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_Revenue_recovered_from_vacancy_loss(this.id); }},
    {id:24,fieldID : "net-operating-income-increase",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_increase(this.id); }},
    {id:25,fieldID : "noi-increase",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_noi_increase(this.id); }},
    {id:26,fieldID : "time-to-pay-off-new-technology",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_time_to_pay_off_new_technology(this.id); }},
    {id:27,fieldID : "new-technology-roi-multiple",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_technology_roi_multiple(this.id); }},
    {id:28,fieldID : "total-opex",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_total_opex(this.id); }},
];

function createSliders(){
    const slidersID=['customRange1','customRange2','customRange3','customRange4','customRange5','customRange6','customRange7','customRange8','customRange9','customRange10','customRange11'] //amount of sliders
    const slidersInfo=['rangeValue1','rangeValue2','rangeValue3','rangeValue4','rangeValue5','rangeValue6','rangeValue7','rangeValue8','rangeValue9','rangeValue10','rangeValue11'] //amount of sliders
    for (let i=0; i<=slidersID.length-1; i++){
        let range=document.getElementById(slidersID[i]);
        let rangeValue=document.getElementById(slidersInfo[i]);
        if (i>=2){
            rangeValue.innerHTML = range.value + " %";
        }else{
            rangeValue.innerHTML = range.value
        }
        slidersValues[i]=parseInt(range.value);    
        range.addEventListener('input', () => { 
            if (i>=3){
                rangeValue.innerHTML = range.value + " %";
            }else{
                rangeValue.innerHTML = range.value
            }
            let pos = slidersID.indexOf(range.id);
            slidersValues[pos]=parseInt(range.value);
            calculateAll(); 
        });
    }
}

//trigger all the calculates.
function calculateAll(){
    for (let i=0;i<=fields.length-1; i++){
        document.getElementById(fields[i].fieldID).value = fields[i].onEnter();
    }    
}

/**
 * 
 * Calculator without automation
 *
 */

function calculate_total_rental_income(val){
    fields[val].value = slidersValues[0] * slidersValues[1] * 12;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_rent_loss_due_to_vacancy(val){
    fields[val].value = fields[0].value * (slidersValues[2] / 100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_gross_profit(val){
    fields[val].value = fields[0].value - fields[1].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_utilities_maintenance(val){
    fields[val].value = (slidersValues[3]/100) * fields[0].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_advertising_marketing(val){
    fields[val].value = (slidersValues[4]/100) * fields[0].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_other(val){
    fields[val].value = (slidersValues[5]/100) * fields[0].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_general_administrative(val){
    fields[val].value = (slidersValues[6]/100) * fields[0].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_salaries_personnel(val){
    fields[val].value = (slidersValues[8]/100) * fields[0].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_new_software_cost(val){
    return 0;
}

function calculate_operating_expenses(val){
    let value=0;
    for (let i=3; i<=7; i++){
        value += fields[i].value;
    }
    fields[val].value = value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income(val)
{
    fields[val].value =  fields[2].value - fields[8].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_NOI_percentage(val){
    fields[val].value = fields[9].value * 100 / fields[2].value;
    fields[val].valueFormatted = fields[val].value.toFixed(0) + " %";
    return fields[val].valueFormatted;
}


/**
 * 
 * Calculator with automation
 *
 */

function calculate_rent_loss_due_to_vacancy_with_Automation(val){
    fields[val].value = (1-((WithAutomationPercentages[0])/100)) * fields[1].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_gross_profit_with_Automation(val){
    fields[val].value = fields[11].value - fields[12].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_advertising_marketing_with_Automation(val){
    fields[val].value = (1-((WithAutomationPercentages[1])/100)) * fields[4].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_general_administrative_with_Automation(val){
    fields[val].value = (1-((WithAutomationPercentages[3])/100)) * fields[6].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_salaries_personnel_with_Automation(val){
    fields[val].value = (1-((WithAutomationPercentages[4])/100)) * fields[7].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_new_software_cost_with_Automation(val){
    fields[val].value = WithAutomationPercentages[2] * slidersValues[0] * 12;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_operating_expenses_with_Automation(val){
    let value=0;
    for (let i=14; i<=19; i++){
        value += fields[i].value;
    }
    fields[val].value = value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income_with_Automation(val){
    fields[val].value =  fields[13].value - fields[20].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_NOI_percentage_with_Automation(val){
    fields[val].value =  fields[21].value * 100 / fields[13].value;
    fields[val].valueFormatted = fields[val].value.toFixed(0)+ " %" ;
    return fields[val].valueFormatted;
}

//summary
function calculate_net_operating_income_increase(val){
    fields[val].value =  fields[21].value - fields[9].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_noi_increase(val){
    fields[val].value =  fields[22].value - fields[10].value;
    fields[val].valueFormatted = fields[val].value.toFixed(0)+" %";
    return fields[val].valueFormatted;
}

function calculate_time_to_pay_off_new_technology(val){
    fields[val].value =  fields[19].value /((fields[8].value - fields[20].value) /365);
    fields[val].valueFormatted = Math.ceil(fields[val].value) + " Days";
    return fields[val].valueFormatted;
}

function calculate_new_technology_roi_multiple(val){
    fields[val].value =  fields[24].value / fields[19].value;
    fields[val].valueFormatted = "X "+ fields[val].value.toFixed(1);
    return fields[val].valueFormatted;
}

function calculate_Revenue_recovered_from_vacancy_loss(val){
    fields[val].value =  fields[1].value - fields[12].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_total_opex(val){
    let value=0;
    for (let i=3; i<=10;i++){
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
