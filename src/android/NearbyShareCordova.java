package com.example.nearbysharecordova;

import android.content.Context;
import android.content.Intent;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;

public class NearbyShareCordova extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("shareText".equals(action)) {
            String text = args.getString(0);
            shareText(text);
            callbackContext.success("Shared successfully");
            return true;
        }
        return false;
    }

    private void shareText(String text) {
        Context context = this.cordova.getActivity().getApplicationContext();
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_SEND);
        intent.putExtra(Intent.EXTRA_TEXT, text);
        intent.setType("text/plain");
        context.startActivity(Intent.createChooser(intent, "Share via Nearby"));
    }
}
