<?php

function timeAgo($time){
    $diff = time() - $time;

    $sec = $diff;
    $min = round($diff / 60);
    $hrs = round($diff / 3600);
    $days = round($diff / 86400);
    $weeks = round($diff / 604800);
    $mnths = round($diff / 2600640);
    $yrs = round($diff / 31207680);

    if ($sec <= 60){
        if ($sec == 1){
            return "1 sec";
        } else {
            return "$sec secs";
        }
    }
    else if ($min <= 60) {
        if ($min == 1){
            return "1 min";
        } else {
            return "$min mins";
        }
    }
    else if ($hrs <= 24) {
        if ($hrs == 1){
            return "1 hour";
        } else {
            return "$hrs hours";
        }
    }
    else if ($days <= 7) {
        if ($days == 1){
            return "1 day";
        } else {
            return "$days days";
        }
    }
    else if ($weeks <= 4.3) {
        if ($weeks == 1){
            return "1 week";
        } else {
            return "$weeks weeks";
        }
    }
    else if ($mnths <= 12) {
        if ($mnths == 1){
            return "1 mon";
        } else {
            return "$mnths mon";
        }
    }
    else {
        if ($yrs == 1){
            return "1 yr";
        } else {
            return "$yrs yrs";
        }
    }
}