import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldWhereUniqueInputObjectSchema as dictCountries_oldWhereUniqueInputObjectSchema } from './dictCountries_oldWhereUniqueInput.schema';
import { dictCountries_oldCreateWithoutDictStatesInputObjectSchema as dictCountries_oldCreateWithoutDictStatesInputObjectSchema } from './dictCountries_oldCreateWithoutDictStatesInput.schema';
import { dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema as dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema } from './dictCountries_oldUncheckedCreateWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCountries_oldWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictCountries_oldCreateWithoutDictStatesInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema)])
}).strict();
export const dictCountries_oldCreateOrConnectWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.dictCountries_oldCreateOrConnectWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldCreateOrConnectWithoutDictStatesInput>;
export const dictCountries_oldCreateOrConnectWithoutDictStatesInputObjectZodSchema = makeSchema();
