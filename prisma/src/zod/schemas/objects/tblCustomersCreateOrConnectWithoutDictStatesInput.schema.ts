import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutDictStatesInputObjectSchema as tblCustomersCreateWithoutDictStatesInputObjectSchema } from './tblCustomersCreateWithoutDictStatesInput.schema';
import { tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema as tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutDictStatesInput>;
export const tblCustomersCreateOrConnectWithoutDictStatesInputObjectZodSchema = makeSchema();
