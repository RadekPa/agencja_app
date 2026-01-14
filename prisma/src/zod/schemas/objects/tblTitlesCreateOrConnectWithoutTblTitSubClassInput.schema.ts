import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateWithoutTblTitSubClassInputObjectSchema as tblTitlesCreateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesCreateWithoutTblTitSubClassInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema)])
}).strict();
export const tblTitlesCreateOrConnectWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblTitSubClassInput>;
export const tblTitlesCreateOrConnectWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
