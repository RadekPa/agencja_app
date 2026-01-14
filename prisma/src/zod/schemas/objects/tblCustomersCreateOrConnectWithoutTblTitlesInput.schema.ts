import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutTblTitlesInputObjectSchema as tblCustomersCreateWithoutTblTitlesInputObjectSchema } from './tblCustomersCreateWithoutTblTitlesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblTitlesInput>;
export const tblCustomersCreateOrConnectWithoutTblTitlesInputObjectZodSchema = makeSchema();
