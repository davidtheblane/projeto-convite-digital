"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Gift, PartyPopper, CalendarX, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import CopyButton from "@/components/custom/copy-button";
import { use } from "react";

const ConfirmQuest = ({
  params,
  searchParams,
}: {
  params: Promise<{ status: string }>;
  searchParams: Promise<{ linkGift?: string }>;
}) => {
  const { status } = use(params);
  const { linkGift = "https://lista-presentes.exemplo.com" } =
    use(searchParams);

  const isConfirmed = status === "confirmed";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4 max-w-3xl">
        <Card className="overflow-hidden border-none shadow-lg">
          <CardContent className="p-0">
            {/* Status Banner */}
            <div
              className={`p-8 ${
                isConfirmed ? "bg-green-500/10" : "bg-amber-500/10"
              } flex items-center justify-center`}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-24 w-24 rounded-full flex items-center justify-center"
              >
                {isConfirmed ? (
                  <PartyPopper className="h-16 w-16 text-green-500" />
                ) : (
                  <CalendarX className="h-16 w-16 text-amber-500" />
                )}
              </motion.div>
            </div>

            {/* Confirmation Message */}
            <div className="p-8 text-center">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                {isConfirmed ? "Uhuuul! 🥳🎉" : "Poxa! 😥😣"}
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg text-muted-foreground mb-8"
              >
                {isConfirmed
                  ? "Estamos felizes em receber você e seus acompanhantes! Até breve!"
                  : "Obrigado por nos deixar saber da sua ausência. Nos vemos numa próxima!"}
              </motion.p>

              {/* Gift Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-muted p-6 rounded-lg"
              >
                <div className="flex items-center justify-center mb-4">
                  <Gift className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Lista de Presentes</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  Se você puder e quiser, aqui está uma lista de produtos que
                  pode{" "}
                  {isConfirmed ? "trazer para nossa festa!" : "nos presentear!"}
                </p>

                <div className="flex items-center gap-3 bg-background p-4 rounded-lg">
                  <div className="flex items-center gap-2 flex-1 overflow-hidden">
                    <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-sm font-medium truncate">{linkGift}</p>
                  </div>
                  <CopyButton
                    textToCopy={linkGift}
                    tooltipText="Copiar link da lista"
                  />
                  <Button variant="outline" size="sm" asChild>
                    <Link href={linkGift} target="_blank">
                      <span>Abrir</span>
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmQuest;
