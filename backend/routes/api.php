<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/users", function() {
    return UserResource::collection(User::all());
});