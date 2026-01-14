import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateWithoutDictStatesInputObjectSchema as tblCustomersUpdateWithoutDictStatesInputObjectSchema } from './tblCustomersUpdateWithoutDictStatesInput.schema';
import { tblCustomersUncheckedUpdateWithoutDictStatesInputObjectSchema as tblCustomersUncheckedUpdateWithoutDictStatesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutDictStatesInput.schema';
import { tblCustomersCreateWithoutDictStatesInputObjectSchema as tblCustomersCreateWithoutDictStatesInputObjectSchema } from './tblCustomersCreateWithoutDictStatesInput.schema';
import { tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema as tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutDictStatesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema)])
}).strict();
export const tblCustomersUpsertWithWhereUniqueWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithWhereUniqueWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithWhereUniqueWithoutDictStatesInput>;
export const tblCustomersUpsertWithWhereUniqueWithoutDictStatesInputObjectZodSchema = makeSchema();
