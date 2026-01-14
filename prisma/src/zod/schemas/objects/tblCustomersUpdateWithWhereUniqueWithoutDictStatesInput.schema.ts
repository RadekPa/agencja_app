import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateWithoutDictStatesInputObjectSchema as tblCustomersUpdateWithoutDictStatesInputObjectSchema } from './tblCustomersUpdateWithoutDictStatesInput.schema';
import { tblCustomersUncheckedUpdateWithoutDictStatesInputObjectSchema as tblCustomersUncheckedUpdateWithoutDictStatesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutDictStatesInputObjectSchema)])
}).strict();
export const tblCustomersUpdateWithWhereUniqueWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateWithWhereUniqueWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateWithWhereUniqueWithoutDictStatesInput>;
export const tblCustomersUpdateWithWhereUniqueWithoutDictStatesInputObjectZodSchema = makeSchema();
