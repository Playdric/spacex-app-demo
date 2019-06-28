
    export interface Core {
        core_serial: string;
        flight: number;
        block: number;
        gridfins: boolean;
        legs: boolean;
        reused: boolean;
        land_success: boolean;
        landing_intent: boolean;
        landing_type: string;
        landing_vehicle: string;
    }

    export interface FirstStage {
        cores: Core[];
    }

    export interface OrbitParams {
        reference_system: string;
        regime: string;
        longitude?: any;
        semi_major_axis_km?: number;
        eccentricity?: number;
        periapsis_km?: number;
        apoapsis_km?: number;
        inclination_deg?: number;
        period_min?: number;
        lifespan_years?: any;
        epoch?: Date;
        mean_motion?: number;
        raan?: number;
        arg_of_pericenter?: number;
        mean_anomaly?: number;
    }

    export interface Payload {
        payload_id: string;
        norad_id: number[];
        reused: boolean;
        customers: string[];
        nationality: string;
        manufacturer: string;
        payload_type: string;
        payload_mass_kg: number;
        payload_mass_lbs: number;
        orbit: string;
        orbit_params: OrbitParams;
    }

    export interface SecondStage {
        block: number;
        payloads: Payload[];
    }

    export interface Fairings {
        reused: boolean;
        recovery_attempt: boolean;
        recovered: boolean;
        ship: string;
    }

    export interface Rocket {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
        first_stage: FirstStage;
        second_stage: SecondStage;
        fairings: Fairings;
    }

    export interface Telemetry {
        flight_club?: any;
    }

    export interface LaunchSite {
        site_id: string;
        site_name: string;
        site_name_long: string;
    }

    export interface Links {
        mission_patch: string;
        mission_patch_small: string;
        reddit_campaign: string;
        reddit_launch: string;
        reddit_recovery?: any;
        reddit_media: string;
        presskit: string;
        article_link: string;
        wikipedia: string;
        video_link: string;
        youtube_id: string;
        flickr_images: string[];
    }

    export interface Timeline {
        webcast_liftoff?: any;
        go_for_prop_loading: number;
        stage1_rp1_loading: number;
        stage1_lox_loading: number;
        stage2_rp1_loading: number;
        stage2_lox_loading: number;
        engine_chill: number;
        prelaunch_checks: number;
        propellant_pressurization: number;
        go_for_launch: number;
        ignition: number;
        liftoff: number;
        maxq: number;
        beco: number;
        side_core_sep: number;
        side_core_boostback: number;
        meco: number;
        center_stage_sep: number;
        second_stage_ignition: number;
        fairing_deploy: number;
        side_core_entry_burn: number;
        side_core_landing: number;
        center_core_entry_burn: number;
        center_core_landing: number;
        payload_deploy: number;
        second_stage_restart: number;
    }

    export interface Launch {
        flight_number: number;
        mission_name: string;
        mission_id: any[];
        launch_year: string;
        launch_date_unix: number;
        launch_date_utc: Date;
        launch_date_local: Date;
        is_tentative: boolean;
        tentative_max_precision: string;
        tbd: boolean;
        launch_window: number;
        rocket: Rocket;
        ships: string[];
        telemetry: Telemetry;
        launch_site: LaunchSite;
        launch_success: boolean;
        links: Links;
        details: string;
        upcoming: boolean;
        static_fire_date_utc: Date;
        static_fire_date_unix: number;
        timeline: Timeline;
        crew?: any;
    }
