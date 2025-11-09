def format_form_data(data):
    return {
        "personalDetails": data.get("personalDetails", {}),
        "travelMotivation": data.get("travelMotivation", {}),
        "transportation": data.get("transportation", {}),
        "accommodation": data.get("accommodation", {}),
        "destinationSelection": data.get("destinationSelection", {}),
        "budgetExpenditure": data.get("budgetExpenditure", {}),
        "travelCompanions": data.get("travelCompanions", {}),
        "safetyHealthConcerns": data.get("safetyHealthConcerns", {}),
        "reminiscence": data.get("reminiscence", {}),
        "consent": data.get("consent", False),
        "files": data.get("files", []),
        "timestamp": data.get("timestamp")
    }
