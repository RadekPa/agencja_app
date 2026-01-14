import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblTitSubClassInputObjectSchema as tblTitlesCreateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesCreateWithoutTblTitSubClassInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitSubClassInput.schema';
import { tblTitlesCreateOrConnectWithoutTblTitSubClassInputObjectSchema as tblTitlesCreateOrConnectWithoutTblTitSubClassInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblTitSubClassInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblTitSubClassInputObjectSchema).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblTitlesCreateNestedOneWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblTitSubClassInput>;
export const tblTitlesCreateNestedOneWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
