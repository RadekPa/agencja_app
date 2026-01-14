import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblSubmissionsInputObjectSchema as tblTitlesCreateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesCreateWithoutTblSubmissionsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblSubmissionsInput.schema';
import { tblTitlesCreateOrConnectWithoutTblSubmissionsInputObjectSchema as tblTitlesCreateOrConnectWithoutTblSubmissionsInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblSubmissionsInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblSubmissionsInputObjectSchema).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblTitlesCreateNestedOneWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblSubmissionsInput>;
export const tblTitlesCreateNestedOneWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
