import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsCreateWithoutTblTitlesInputObjectSchema as tblSubmissionsCreateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsCreateWithoutTblTitlesInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblSubmissionsCreateOrConnectWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateOrConnectWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateOrConnectWithoutTblTitlesInput>;
export const tblSubmissionsCreateOrConnectWithoutTblTitlesInputObjectZodSchema = makeSchema();
