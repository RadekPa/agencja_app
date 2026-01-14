import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './tblTitSubClassWhereUniqueInput.schema';
import { tblTitSubClassCreateWithoutTblTitlesInputObjectSchema as tblTitSubClassCreateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassCreateWithoutTblTitlesInput.schema';
import { tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitSubClassCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitSubClassCreateOrConnectWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateOrConnectWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateOrConnectWithoutTblTitlesInput>;
export const tblTitSubClassCreateOrConnectWithoutTblTitlesInputObjectZodSchema = makeSchema();
