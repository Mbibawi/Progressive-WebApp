const IncensePrayersSequence = [
    Prefix.commonIncense + "EleysonImas&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "CymbalVersesPlaceHolder&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "LitaniesComment1&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "SickPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "TravelersPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseDawn + "OblationsPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseVespers + "DepartedPrayer&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "DoxolgiesComment&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "AngelsPrayer&D=$copticFeasts.AnyDay",
    Prefix.incenseVespers + "LordKeepUsThisNightWithoutSin&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "Agios&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "WeSaluteYouMary&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "DoxologiesPlaceHolder&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "WeExaltYouStMary&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "Creed&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "EfnotiNaynan&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "GospelPrayerPlaceHolder&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "GospelLitanyComment4&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "BlockInTheNameOfOurLord&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "GospelLitanyComment5&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "BlockIriniPassi&D=$copticFeasts.AnyDay",
    Prefix.commonPrayer + "AbsolutionForTheSon&D=$copticFeasts.AnyDay",
    Prefix.commonIncense + "LiturgyEnd&D=$copticFeasts.AnyDay"
]; //    this is the generic sequence of all prayers for incense dawn and incense vespers. The onClick function triggered by btnIncenseDawn and btnIncenseVespers, will remove what is irrelevant and add what needs to be added according to whether it is a Dawn or Vespers office
const MassPrayersSequences = {
    //those are the sequences of the 'Baptized' mass prayers (starting from Reconciliation) for each mass
    MassUnbaptized: [
        Prefix.massCommon + "GloryAndHonor&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "HallelujahFayBiBi&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "HallelujahFayBiBiFast&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "BenedictionOfTheLamb&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "ThanksGiving&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "AbsolutionForTheFather&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "Tayshoury&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "Tishoury&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "IntercessionsHymn&D=$copticFeasts.AnyDay",
        Prefix.massCommon + 'ReadingsPlaceHolder&D=$copticFeasts.AnyDay',
        Prefix.commonPrayer + "GospelPrayerPlaceHolder&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "Creed&D=$copticFeasts.AnyDay"
    ],
    MassStBasil: [
        Prefix.massCommon + "ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "Agios&D=$copticFeasts.AnyDay",
        Prefix.massStBasil + "InstitutionNarrative&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "AsWeAlsoCommemorateHisHolyPassionPart1&D=$copticFeasts.AnyDay",
    ],
    MassStGregory: [
        Prefix.massCommon + "ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Agios&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "AsWeCommemorateYourHolyPassionPart1&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "CallOfTheHolySpiritPart1&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "LitaniesIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "Litanies&D=$copticFeasts.AnyDay",
        Prefix.massStGregory + "FractionIntroduction&D=$copticFeasts.AnyDay"
    ],
    MassStCyril: [
        Prefix.massCommon + "ReconciliationComment&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Reconciliation&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "EndOfReconciliation&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Anaphora&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Agios&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Part8&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Part9&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "Part10&D=$copticFeasts.AnyDay",
        Prefix.massStCyril + "LitaniesIntroduction&D=$copticFeasts.AnyDay",
    ],
    MassStJohn: [],
    MassCallOfHolySpirit: [
        Prefix.massCommon + "CallOfTheHolySpiritPart1&D=$copticFeasts.AnyDay",
    ],
    MassLitanies: [
        Prefix.massCommon + "LitaniesIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "SaintsCommemoration&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "CommemorationOfTheDeparted&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "FractionIntroduction&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "OurFatherWhoArtInHeaven&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "BlockInTheNameOfOurLord&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "PrayerForTheFather&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "BlockIriniPassi&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "AbsolutionPrayerForTheFather&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "ConfessionIntroduction&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "Confession&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "ZoksasiKyrie&D=$copticFeasts.AnyDay"
    ],
    Communion: [
        Prefix.massCommon + "CommunionPsalm150&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "LiturgyEnd&D=$copticFeasts.AnyDay",
    ], //the sequence of prayers from 'Confession' until the end of the mass, it is common to all masses 
};
const PsalmodyPrayersSequences = {
    PsalmodyYear: [
        Prefix.psalmody + "WakeUpSonsOfLight&D=$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "PsalyOnFirstHos&D=$Seasons.KiahkWeek1||$Seasons.KiahkWeek2||$copticFeasts.AnyDay"
    ],
    PsalmodyKiahk: [
        Prefix.psalmody + "WakeUpSonsOfLight&D=$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "KiahkHos&D=$Seasons.KiahkWeek1||Seasons.KiahkWeek2",
        Prefix.psalmody + "ChantAgiosOsiOs&D=$Seasons.KiahkWeek1||Seasons.KiahkWeek2",
        Prefix.psalmody + "EpsalyOnFirstHos&D=$Seasons.KiahkWeek1||$Seasons.KiahkWeek2||$copticFeasts.AnyDay",
        Prefix.psalmody + "FirstHos&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "LobshFirstHos&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "ChantGodSaidToMoses&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "CommentaryOnHos1&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||Seasons.KiahkWeek2",
        Prefix.psalmody + "PsalyOnSecondHos&D=$Seasons.KiahkWeek1||$Seasons.KiahkWeek2||$copticFeasts.AnyDay",
        Prefix.psalmody + "SecondHos&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "LobshSecondHos&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
        Prefix.psalmody + "ChantLetsSingWithDavid&D=$copticFeasts.AnyDay||$Seasons.KiahkWeek1||$Seasons.KiahkWeek2",
    ],
};
const HolyWeekPrayersSequences = {
    PassOver: [
        Prefix.HolyWeek + "HourIntroduction&D=$Seasons.HolyWeek",
        Prefix.HolyWeek + "HourCopticPsalm&D=$Seasons.HolyWeek",
        Prefix.HolyWeek + "HourCopticGospel&D=$Seasons.HolyWeek",
        Prefix.HolyWeek + "GospelCommentary&D=$Seasons.HolyWeek",
        Prefix.HolyWeek + "DayLitany&D=$Seasons.HolyWeek",
        Prefix.HolyWeek + "PassoverEnd&D=$Seasons.HolyWeek",
    ],
    Lakan: [
        Prefix.commonIncense + "EleysonImas&D=$copticFeasts.AnyDay",
        Prefix.cymbalVerses + "&D=$copticFeasts.HolyThursday",
        Prefix.bookOfHours + "Psalm50&D=$copticFeasts.AnyDay",
        Prefix.HolyWeek + "LakanProphecies&D=$copticFeasts.HolyThursday",
        Prefix.HolyWeek + "LakanSermony&D=$copticFeasts.HolyThursday",
        Prefix.massCommon + "BiEhmotGhar&D=$copticFeasts.AnyDay",
        Prefix.stPaul + "&D=$copticFeasts.HolyThursday",
        Prefix.commonPrayer + "GospelPrayerPlaceHolder&D=$copticFeasts.AnyDay",
        //Get Gospel Reading
        //Prefix.commonPrayer + "Agios&D=$copticFeasts.HolyThursday",
        //Prefix.commonPrayer + "BlockShlil&D=$copticFeasts.AnyDay",
        //Prefix.commonPrayer + "BlockIriniPassi&D=$copticFeasts.AnyDay",
        //Prefix.commonPrayer + "GospelPrayer&D=$copticFeasts.AnyDay",
        //فليرفعوه في كنيسة شعبه
        Prefix.incenseDawn + "SickPrayer&D=$copticFeasts.AnyDay",
        Prefix.incenseDawn + "TravelersPrayer&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "SeasonalLitanyOfTheHarvest&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "KyrieElieson&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "LitaniesFinal&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "KyrieElieson&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "PresidentLitany&D=$copticFeasts.AnyDay",
        Prefix.incenseVespers + "DepartedPrayer&D=$copticFeasts.AnyDay",
        Prefix.incenseDawn + "OblationsPrayer&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "CatechumensPrayer&D=$copticFeasts.AnyDay",
        Prefix.HolyWeek + "LakanPrayer&D=$copticFeasts.HolyThursday",
        Prefix.commonPrayer + "BlockShlil&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "BlockIriniPassi&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "ChurchLitany&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "PopeAndBishopLitany&D=$copticFeasts.AnyDay",
        Prefix.commonPrayer + "MeetingsLitany&D=$copticFeasts.AnyDay",
        //Insert "Eyn Sophia Si Epros"
        Prefix.commonPrayer + "Creed&D=$copticFeasts.AnyDay",
        Prefix.massCommon + "LakanSpasmosAdamLong&D=$copticFeasts.HolyThursday",
        Prefix.massCommon + "DiaconResponseKissEachOther&D=$copticFeasts.AnyDay",
        Prefix.placeHolder,
        Prefix.massCommon + "SpasmosAdamShort&D=$copticFeasts.AnyDay",
        Prefix.HolyWeek + "LakanAnaphora&D=$copticFeasts.HolyThursday",
        // Prefix.commonIncense + "LiturgyEnd&D=$copticFeasts.AnyDay"
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjbGFyZVByYXllcnNTZXF1ZW5jZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL0RlY2xhcmVQcmF5ZXJzU2VxdWVuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sc0JBQXNCLEdBQWE7SUFDckMsTUFBTSxDQUFDLGFBQWEsR0FBRyxvQ0FBb0M7SUFDM0QsTUFBTSxDQUFDLGFBQWEsR0FBRyxnREFBZ0Q7SUFDdkUsTUFBTSxDQUFDLGFBQWEsR0FBRyx5Q0FBeUM7SUFDaEUsTUFBTSxDQUFDLFdBQVcsR0FBRyxtQ0FBbUM7SUFDeEQsTUFBTSxDQUFDLFdBQVcsR0FBRyx3Q0FBd0M7SUFDN0QsTUFBTSxDQUFDLFdBQVcsR0FBRyx3Q0FBd0M7SUFDN0QsTUFBTSxDQUFDLGNBQWMsR0FBRyx1Q0FBdUM7SUFDL0QsTUFBTSxDQUFDLGFBQWEsR0FBRyx5Q0FBeUM7SUFDaEUsTUFBTSxDQUFDLFlBQVksR0FBRyxxQ0FBcUM7SUFDM0QsTUFBTSxDQUFDLGNBQWMsR0FBRyxzREFBc0Q7SUFDOUUsTUFBTSxDQUFDLFlBQVksR0FBRyw4QkFBOEI7SUFDcEQsTUFBTSxDQUFDLFlBQVksR0FBRyxnREFBZ0Q7SUFDdEUsTUFBTSxDQUFDLFlBQVksR0FBRyx3Q0FBd0M7SUFDOUQsTUFBTSxDQUFDLGFBQWEsR0FBRyw4Q0FBOEM7SUFDckUsTUFBTSxDQUFDLFlBQVksR0FBRyx5Q0FBeUM7SUFDL0QsTUFBTSxDQUFDLFlBQVksR0FBRyw4QkFBOEI7SUFDcEQsTUFBTSxDQUFDLFlBQVksR0FBRyxxQ0FBcUM7SUFDM0QsTUFBTSxDQUFDLFlBQVksR0FBRyxnREFBZ0Q7SUFDdEUsTUFBTSxDQUFDLFlBQVksR0FBRyxnREFBZ0Q7SUFDdEUsTUFBTSxDQUFDLFlBQVksR0FBRyw2Q0FBNkM7SUFDbkUsTUFBTSxDQUFDLFlBQVksR0FBRyxnREFBZ0Q7SUFDdEUsTUFBTSxDQUFDLFlBQVksR0FBRyw2Q0FBNkM7SUFDbkUsTUFB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