package com.jestpoc;

import android.content.Intent;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class Demo extends ReactContextBaseJavaModule {

    private static  ReactApplicationContext context;
     Demo(ReactApplicationContext applicationContext){
        super(applicationContext);
         context=applicationContext;
    }

    @ReactMethod
    public  void show(){
        Toast.makeText(context,"Hi I am Kirti",Toast.LENGTH_LONG).show();
    }
    @ReactMethod
    public  void customView(){
        Intent intent =new Intent(context,LoginScreen.class);
        getCurrentActivity().startActivity(intent);
    }
    @NonNull
    @Override
    public String getName() {
        return "TestBridge";
    }
}
