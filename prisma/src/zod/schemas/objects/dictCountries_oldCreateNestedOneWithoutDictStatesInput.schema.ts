import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldCreateWithoutDictStatesInputObjectSchema as dictCountries_oldCreateWithoutDictStatesInputObjectSchema } from './dictCountries_oldCreateWithoutDictStatesInput.schema';
import { dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema as dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema } from './dictCountries_oldUncheckedCreateWithoutDictStatesInput.schema';
import { dictCountries_oldCreateOrConnectWithoutDictStatesInputObjectSchema as dictCountries_oldCreateOrConnectWithoutDictStatesInputObjectSchema } from './dictCountries_oldCreateOrConnectWithoutDictStatesInput.schema';
import { dictCountries_oldWhereUniqueInputObjectSchema as dictCountries_oldWhereUniqueInputObjectSchema } from './dictCountries_oldWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCountries_oldCreateWithoutDictStatesInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCountries_oldCreateOrConnectWithoutDictStatesInputObjectSchema).optional(),
  connect: z.lazy(() => dictCountries_oldWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictCountries_oldCreateNestedOneWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.dictCountries_oldCreateNestedOneWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldCreateNestedOneWithoutDictStatesInput>;
export const dictCountries_oldCreateNestedOneWithoutDictStatesInputObjectZodSchema = makeSchema();
